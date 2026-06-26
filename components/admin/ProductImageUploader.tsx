"use client";

import { useState } from "react";
import { ImageSquare, SpinnerGap, UploadSimple, X } from "@phosphor-icons/react";

type UploadedImage = {
  path: string;
  url: string;
};

export function ProductImageUploader({ defaultImages = [] }: { defaultImages?: string[] }) {
  const [images, setImages] = useState<UploadedImage[]>(() =>
    defaultImages.map((url) => ({
      path: url,
      url
    }))
  );
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleUpload(files: FileList | null) {
    if (!files?.length) {
      return;
    }

    setIsUploading(true);
    setMessage(null);

    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("files", file));

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData
      });
      const payload = (await response.json()) as { files?: UploadedImage[]; message?: string };

      if (!response.ok || !payload.files) {
        throw new Error(payload.message ?? "Upload failed.");
      }

      setImages((current) => [...current, ...payload.files!]);
      setMessage(`${payload.files.length} image${payload.files.length === 1 ? "" : "s"} uploaded.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Upload failed.");
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="rounded-[6px] border border-dashed border-[var(--border)] bg-[var(--surface-2)] p-5">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-medium text-[var(--ivory)]">Product images</p>
          <p className="mt-2 text-sm text-[var(--champagne)]/70">Upload JPG, PNG, or WebP images up to 5MB.</p>
        </div>
        <label className="inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-[6px] border border-[var(--gold)] px-4 text-sm font-medium text-[var(--gold)] transition-[background-color,color] duration-200 hover:bg-[var(--gold)] hover:text-[var(--void)]">
          {isUploading ? <SpinnerGap className="animate-spin" size={17} /> : <UploadSimple size={17} />}
          {isUploading ? "Uploading" : "Upload"}
          <input
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            disabled={isUploading}
            onChange={(event) => void handleUpload(event.target.files)}
          />
        </label>
      </div>

      {message ? <p className="mt-4 text-sm text-[var(--champagne)]/80">{message}</p> : null}

      {images.length ? (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {images.map((image) => (
            <div key={image.url} className="flex items-center gap-3 border border-[var(--border)] bg-[var(--surface)] p-2">
              <div className="relative grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-[6px] bg-[var(--surface-2)] text-[var(--gold)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image.url} alt="" className="h-full w-full object-cover" />
                <ImageSquare className="absolute opacity-0" size={18} />
              </div>
              <input type="hidden" name="images" value={image.url} />
              <p className="min-w-0 flex-1 truncate text-xs text-[var(--champagne)]/72">{image.url}</p>
              <button
                type="button"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-[6px] border border-[var(--border)] text-[var(--champagne)]/70 transition-colors duration-200 hover:text-[var(--ivory)]"
                aria-label="Remove image"
                onClick={() => setImages((current) => current.filter((item) => item.url !== image.url))}
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
