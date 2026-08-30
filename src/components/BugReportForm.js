"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LOG_BYTES = 2 * 1024 * 1024;
const MAX_SCREENSHOT_BYTES = 5 * 1024 * 1024;
const LOG_ACCEPT = ".txt,.log,.json,.md,text/plain";
const SCREENSHOT_ACCEPT = "image/png,image/jpeg,image/webp,image/gif";

const fieldClass =
  "w-full px-3 py-2.5 text-sm text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C8DA1] focus:border-[#2C8DA1] transition-all";
const fieldErrorClass =
  "w-full px-3 py-2.5 text-sm text-gray-900 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all";
const fileButtonClass =
  "inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:border-gray-400 hover:bg-gray-50 transition-all cursor-pointer focus-within:ring-2 focus-within:ring-[#2C8DA1] focus-within:border-[#2C8DA1]";

const initialForm = {
  description: "",
  steps: "",
  email: "",
  diagnosticLog: "",
};

async function submitBugReport(_payload) {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return { ok: true };
}

export default function BugReportForm() {
  const formId = useId();
  const [form, setForm] = useState(initialForm);
  const [logFile, setLogFile] = useState(null);
  const [screenshot, setScreenshot] = useState(null);
  const [screenshotPreview, setScreenshotPreview] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!screenshot) {
      setScreenshotPreview("");
      return undefined;
    }
    const url = URL.createObjectURL(screenshot);
    setScreenshotPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [screenshot]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const next = {};
    if (!form.description.trim()) {
      next.description = "Please describe the problem. This field is required.";
    }
    if (form.email.trim() && !EMAIL_PATTERN.test(form.email.trim())) {
      next.email = "Enter a valid email address, or leave this field blank.";
    }
    return next;
  };

  const onLogFileChange = (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (file.size > MAX_LOG_BYTES) {
      setErrors((prev) => ({ ...prev, logFile: "Log files must be 2 MB or smaller." }));
      return;
    }
    setErrors((prev) => {
      const next = { ...prev };
      delete next.logFile;
      return next;
    });
    setLogFile(file);
  };

  const onScreenshotChange = (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setErrors((prev) => ({ ...prev, screenshot: "Please choose an image file." }));
      return;
    }
    if (file.size > MAX_SCREENSHOT_BYTES) {
      setErrors((prev) => ({ ...prev, screenshot: "Screenshots must be 5 MB or smaller." }));
      return;
    }
    setErrors((prev) => {
      const next = { ...prev };
      delete next.screenshot;
      return next;
    });
    setScreenshot(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    try {
      const result = await submitBugReport({
        description: form.description.trim(),
        steps: form.steps.trim(),
        email: form.email.trim(),
        diagnosticLog: form.diagnosticLog.trim(),
        logFileName: logFile?.name ?? null,
        screenshotName: screenshot?.name ?? null,
      });
      if (!result.ok) {
        throw new Error("The report could not be sent.");
      }
      setStatus("success");
      setForm(initialForm);
      setLogFile(null);
      setScreenshot(null);
    } catch {
      setStatus("error");
      setSubmitError("We could not send your report. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-6 sm:p-8 lg:p-10 text-center" role="status">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#2C8DA1]/10 flex items-center justify-center">
          <svg className="w-7 h-7 text-[#2C8DA1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold text-[#023347] mb-3">Report sent</h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
          Thank you. We have received your bug report and will look into it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:border-gray-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C8DA1] focus-visible:ring-offset-2"
          >
            Submit another report
          </button>
          <Link
            href="/help-center"
            className="px-4 py-2.5 bg-[#2C8DA1] hover:bg-[#257a8d] text-white font-medium text-sm rounded-md transition-all duration-200 shadow-sm hover:shadow inline-block text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C8DA1] focus-visible:ring-offset-2"
          >
            Go to Help Centre
          </Link>
        </div>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-gray-300 rounded-lg shadow-sm p-6 sm:p-8 lg:p-10 space-y-5"
      aria-busy={isSubmitting}
    >
      {status === "error" ? (
        <div
          className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          {submitError}
        </div>
      ) : null}

      <div className="sr-only" aria-live="polite">
        {isSubmitting ? "Submitting your report" : ""}
      </div>

      <div>
        <label htmlFor={`${formId}-description`} className="block text-sm font-medium text-gray-700 mb-1.5">
          Description of the problem <span className="text-[#2C8DA1]">*</span>
          <span className="sr-only">required</span>
        </label>
        <p id={`${formId}-description-hint`} className="text-xs text-gray-500 mb-2">
          Required. Tell us what went wrong.
        </p>
        <textarea
          id={`${formId}-description`}
          name="description"
          required
          rows={5}
          value={form.description}
          onChange={updateField}
          aria-required="true"
          aria-invalid={Boolean(errors.description)}
          aria-describedby={`${formId}-description-hint${errors.description ? ` ${formId}-description-error` : ""}`}
          className={`${errors.description ? fieldErrorClass : fieldClass} resize-y`}
        />
        {errors.description ? (
          <p id={`${formId}-description-error`} className="mt-1.5 text-xs text-red-600" role="alert">
            {errors.description}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor={`${formId}-steps`} className="block text-sm font-medium text-gray-700 mb-1.5">
          Steps to reproduce <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          id={`${formId}-steps`}
          name="steps"
          rows={5}
          value={form.steps}
          onChange={updateField}
          placeholder="Describe the steps that caused the issue. For example: 1. Open the app. 2. Choose Send. 3. The message failed to send."
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div>
        <label htmlFor={`${formId}-email`} className="block text-sm font-medium text-gray-700 mb-1.5">
          Email address <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          id={`${formId}-email`}
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={form.email}
          onChange={updateField}
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          className={errors.email ? fieldErrorClass : fieldClass}
        />
        {errors.email ? (
          <p id={`${formId}-email-error`} className="mt-1.5 text-xs text-red-600" role="alert">
            {errors.email}
          </p>
        ) : (
          <p className="mt-1 text-xs text-gray-500">Only used if we need to follow up. Leave blank if you prefer.</p>
        )}
      </div>

      <div>
        <span className="block text-sm font-medium text-gray-700 mb-1.5">
          Attach or paste diagnostic log <span className="text-gray-400 font-normal">(optional)</span>
        </span>
        <label htmlFor={`${formId}-diagnosticLog`} className="sr-only">
          Paste diagnostic log
        </label>
        <textarea
          id={`${formId}-diagnosticLog`}
          name="diagnosticLog"
          rows={5}
          value={form.diagnosticLog}
          onChange={updateField}
          placeholder="Paste diagnostic logs here, or attach a log file below."
          className={`${fieldClass} resize-y font-mono text-xs sm:text-sm`}
        />
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <label className={fileButtonClass}>
            <input
              type="file"
              accept={LOG_ACCEPT}
              className="sr-only"
              onChange={onLogFileChange}
            />
            Attach a log file
          </label>
          {logFile ? (
            <span className="text-sm text-gray-700 flex items-center gap-2">
              {logFile.name}
              <button
                type="button"
                onClick={() => setLogFile(null)}
                className="text-[#2C8DA1] hover:text-[#257a8d] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C8DA1] rounded"
              >
                Remove
              </button>
            </span>
          ) : (
            <span className="text-xs text-gray-500">.txt, .log, or .json up to 2 MB</span>
          )}
        </div>
        {errors.logFile ? (
          <p className="mt-1.5 text-xs text-red-600" role="alert">
            {errors.logFile}
          </p>
        ) : null}
      </div>

      <div>
        <span className="block text-sm font-medium text-gray-700 mb-1.5">
          Attach screenshot <span className="text-gray-400 font-normal">(optional)</span>
        </span>
        <div className="flex flex-wrap items-start gap-4">
          <label className={fileButtonClass}>
            <input
              type="file"
              accept={SCREENSHOT_ACCEPT}
              className="sr-only"
              onChange={onScreenshotChange}
            />
            Choose image
          </label>
          {screenshot ? (
            <div className="flex items-start gap-3 min-w-0">
              {screenshotPreview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={screenshotPreview}
                  alt="Selected screenshot preview"
                  className="w-20 h-20 object-cover rounded-md border border-gray-300"
                />
              ) : null}
              <div className="min-w-0">
                <p className="text-sm text-gray-700 break-all">{screenshot.name}</p>
                <button
                  type="button"
                  onClick={() => setScreenshot(null)}
                  className="mt-1 text-sm text-[#2C8DA1] hover:text-[#257a8d] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C8DA1] rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <p className="text-xs text-gray-500 pt-2">PNG, JPG, or WebP up to 5 MB</p>
          )}
        </div>
        {errors.screenshot ? (
          <p className="mt-1.5 text-xs text-red-600" role="alert">
            {errors.screenshot}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-4 py-2.5 bg-[#2C8DA1] hover:bg-[#257a8d] text-white font-medium text-sm rounded-md transition-all duration-200 shadow-sm hover:shadow disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2C8DA1] focus-visible:ring-offset-2"
      >
        {isSubmitting ? "Submitting…" : "Submit Bug Report"}
      </button>
    </form>
  );
}
