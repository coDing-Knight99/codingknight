import { GraduationCap } from "lucide-react";

export default function EducationCard({ degree, school, year}) {
  return (
    <div className="xl:m-10 m-5 md:w-[50%] bg-black relative rounded-2xl p-[1px] gradient-border shadow-lg hover:scale-[1.02] transition-all duration-300 ">
      <div className="rounded-2xl p-6 h-full">
        {/* Header */}
        <div className="flex items-center md:gap-3 gap-5 mb-4">
          <div className="gradient-border p-3 rounded-xl text-white shadow-md">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white">{school}</h2>
            <p className="text-gray-300 text-sm">{degree}</p>
          </div>
        </div>

        {/* Year */}
        <span className="inline-block text-sm font-medium text-blue-400 mb-3">
          {year}
        </span>

      </div>
    </div>
  );
}
