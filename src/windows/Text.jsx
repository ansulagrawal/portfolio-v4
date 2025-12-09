import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";

function Chip({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-linear-to-r from-blue-50 to-indigo-50 text-indigo-700 border border-indigo-200 mr-2 mb-2 shadow-sm hover:shadow-md transition-shadow duration-200">
      {children}
    </span>
  );
}

function Metric({ label, value }) {
  return (
    <div className="flex flex-col items-center px-4 py-3 border border-gray-200 rounded-xl bg-linear-to-br from-white to-gray-50 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 min-w-[100px]">
      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
        {label}
      </span>
      <span className="font-bold text-lg text-gray-800">{value}</span>
    </div>
  );
}

function Text() {
  const { windows } = useWindowStore();
  const data = windows?.txtFile?.data ?? null;

  if (!data) return null;

  const {
    name,
    image,
    subtitle,
    tech = [],
    meta = {},
    metrics = [],
    description,
  } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtFile" />
        <h2>{name}</h2>
      </div>

      <div className="p-3 space-y-3 bg-linear-to-br from-gray-50 via-white to-blue-50 min-h-full">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 pb-3 border-b border-gray-200">
          {image && (
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-indigo-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <img
                src={image}
                alt={name}
                className="relative size-32 object-cover rounded-full border-4 border-white shadow-xl ring-2 ring-gray-100"
              />
            </div>
          )}

          <div className="flex-1 text-center md:text-left">
            {subtitle && (
              <h3 className="text-md font-bold text-gray-800 mb-2 leading-tight">
                {subtitle}
              </h3>
            )}
            {meta && (meta.role || meta.duration) && (
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-gray-600">
                {meta.role && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                    {meta.role}
                  </span>
                )}
                {meta.duration && (
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
                    {meta.duration}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        {tech?.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
              Technologies
            </h4>
            <div className="flex flex-wrap">
              {tech.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        {description?.length > 0 && (
          <>
            <ul className="space-y-1">
              {description.map((para, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 shrink-0" />
                  <span className="leading-relaxed text-sm text-gray-700">
                    {para}
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}

        {/* Metrics */}
        {metrics?.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide text-center">
              Key Metrics
            </h4>
            <div className="flex flex-wrap gap-3 items-center justify-center">
              {metrics.map((m) => (
                <Metric key={m.label} label={m.label} value={m.value} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const TextWindow = WindowWrapper(Text, "txtFile");
export default TextWindow;
