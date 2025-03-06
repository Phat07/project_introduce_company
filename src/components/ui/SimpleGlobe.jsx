import { cn } from "../../lib/utils.js";

const LOCATIONS = [
  { name: "Haiti", left: "23%", top: "43%", labelPosition: "right" },
  { name: "Peru", left: "23%", top: "62%", labelPosition: "right" },
  { name: "Cameroon", left: "45%", top: "52%", labelPosition: "left" },
  { name: "Burundi", left: "52%", top: "45%", labelPosition: "left" },
  { name: "Tanzania", left: "54%", top: "52%", labelPosition: "right" },
  { name: "Mozambique", left: "54%", top: "60%", labelPosition: "right" },
  { name: "Myanmar", left: "73%", top: "45%", labelPosition: "left" },
  { name: "Laos", left: "80%", top: "50%", labelPosition: "right" },
  { name: "Vietnam", left: "82%", top: "45%", labelPosition: "right" },
  { name: "Cambodia", left: "80%", top: "60%", labelPosition: "right" },
  { name: "Timor-leste", left: "85%", top: "75%", labelPosition: "right" },
];

function SimpleGlobe({ className }) {
  const getLabelStyle = (position) => {
    switch (position) {
      case 'right':
        return 'left-3 top-0';
      case 'left':
        return 'right-3 top-0 text-right';
      case 'top':
        return 'left-1/2 -translate-x-1/2 -top-4 text-center';
      case 'bottom':
        return 'left-1/2 -translate-x-1/2 top-3 text-center';
      default:
        return 'left-3 top-0';
    }
  };

  return (
    <div className={cn("relative w-full h-full select-none", className)}>
      {/* Background Map */}
      <div className="w-full h-full">
        <img 
          src="/images/global/global_map.png" 
          alt="World Map" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Location Markers */}
      {LOCATIONS.map((location, index) => (
        <div
          key={location.name}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            left: location.left, 
            top: location.top,
            zIndex: 5
          }}
        >
          {/* Outer pulse rings */}
          <div className="absolute -inset-3">
            <div className="w-6 h-6 rounded-full bg-red-500/20 animate-ping" />
          </div>
          <div className="absolute -inset-2">
            <div className="w-4 h-4 rounded-full bg-red-500/30 animate-ping" style={{ animationDelay: '0.5s' }} />
          </div>
          
          {/* Inner dot */}
          <div className="relative">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-lg shadow-red-500/50" />
            <span className={`absolute text-[10px] font-medium text-red-500 whitespace-nowrap ${getLabelStyle(location.labelPosition)}`}>
              {location.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SimpleGlobe;
