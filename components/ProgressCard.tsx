'use client';

interface ProgressCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

export default function ProgressCard({ 
  title, 
  value, 
  subtitle, 
  icon, 
  trend = 'neutral',
  trendValue 
}: ProgressCardProps) {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return 'ri-arrow-up-line';
      case 'down': return 'ri-arrow-down-line';
      default: return 'ri-subtract-line';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg">
            <i className={`${icon} w-6 h-6 flex items-center justify-center text-blue-600`}></i>
          </div>
          <div className="ml-4">
            <h3 className="text-sm font-medium text-gray-500">{title}</h3>
            <p className="text-2xl font-semibold text-gray-900">{value}</p>
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
        </div>
        
        {trendValue && (
          <div className={`flex items-center ${getTrendColor()}`}>
            <i className={`${getTrendIcon()} w-4 h-4 flex items-center justify-center mr-1`}></i>
            <span className="text-sm font-medium">{trendValue}</span>
          </div>
        )}
      </div>
    </div>
  );
}