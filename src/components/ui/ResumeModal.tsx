import { X, Download } from "lucide-react";
import ResumeThumbnail from "../../assets/thumbnail.png";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 max-w-5xl w-[92%] md:w-[80%] max-h-[75vh] bg-slate-900/90 border border-slate-700 rounded-xl p-4 md:p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold heading-gradient-lavender heading-glow">
            Viewing Resume
          </h3>
          <button
            aria-label="Close resume viewer"
            onClick={onClose}
            className="p-2 rounded-md hover:bg-slate-800/40 transition-colors"
          >
            <X className="w-5 h-5 text-gray-200" />
          </button>
        </div>

        <div className="h-[60vh] bg-slate-800/50 rounded-md overflow-hidden">
          {/* Try to load a PDF at /resume.pdf; fallback to image */}
          <iframe
            src="/Resume_LanzAlexander_Malto.pdf"
            title="Resume PDF"
            className="w-full h-full bg-white/5"
          >
            {/* fallback content for browsers without iframe/PDF support */}
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={ResumeThumbnail}
                alt="Resume"
                className="object-contain h-full"
              />
            </div>
          </iframe>
        </div>

        <div className="mt-4 flex items-center justify-end gap-3">
          <a
            href="/Resume_LanzAlexander_Malto.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-indigo-500 to-purple-500 text-white rounded-md font-semibold hover:shadow-lg transition-all"
          >
            <Download className="w-4 h-4" />
            Open in New Tab
          </a>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-slate-700/60 text-white hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
