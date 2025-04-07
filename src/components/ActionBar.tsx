import React, { useState } from 'react';
import { 
  Search, 
  Mic, 
  Upload, 
  Scan, 
  List, 
  MessageSquare, 
  X,
  Maximize2,
  Minimize2,
  Wand2
} from 'lucide-react';

interface ActionBarProps {
  onSearch: (query: string) => void;
  onVoice: () => void;
  onUpload: () => void;
  onAnalyze: () => void;
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
  animation?: string;
  showCaption: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  label,
  description,
  isActive,
  onClick,
  animation,
  showCaption
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative group">
      <button
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`p-3 rounded-lg transition-all duration-300 flex items-center gap-3 w-full ${
          isActive 
            ? 'bg-white/20 shadow-lg' 
            : 'hover:bg-white/10'
        } ${animation}`}
      >
        <div className="flex-shrink-0">
          {icon}
        </div>
        {showCaption && (
          <div className="text-left transition-opacity duration-200">
            <div className="text-white font-medium">{label}</div>
            <div className="text-white/70 text-sm">{description}</div>
          </div>
        )}
      </button>

      {/* Tooltip */}
      {showTooltip && !isActive && !showCaption && (
        <div className="absolute bottom-full left-0 mb-2 w-48 bg-white rounded-lg shadow-lg p-2 text-sm text-gray-800 transform -translate-y-1 transition-all duration-200 z-50">
          <div className="font-medium">{label}</div>
          <div className="text-gray-600 text-xs">{description}</div>
          <div className="absolute bottom-0 left-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
        </div>
      )}
    </div>
  );
};

export const ActionBar: React.FC<ActionBarProps> = ({
  onSearch,
  onVoice,
  onUpload,
  onAnalyze,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setActiveAction(null);
    }
  };

  const handleActionClick = (action: string) => {
    if (action === activeAction) {
      setActiveAction(null);
      return;
    }
    
    setActiveAction(action);
    setIsExpanded(true);
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
    }, 1500);
  };

  const renderActionContent = () => {
    switch (activeAction) {
      case 'search':
        return (
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 backdrop-blur-sm pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && onSearch(searchQuery)}
              />
              <Wand2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5 animate-pulse" />
            </div>
            {searchQuery && (
              <div className="mt-3 space-y-2">
                <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                  <div className="text-white/80 text-sm">Suggested: "{searchQuery}"</div>
                </div>
              </div>
            )}
          </div>
        );
      case 'voice':
        return (
          <div className="p-4 text-center">
            <div className="relative">
              <Mic className="w-16 h-16 mx-auto mb-2 text-white animate-pulse" />
              <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-ping"></div>
            </div>
            <p className="text-white mt-4">Listening for your command...</p>
            <div className="mt-2 flex justify-center space-x-1">
              {[1,2,3,4,5].map((i) => (
                <div 
                  key={i}
                  className="w-1 h-4 bg-white/60 rounded-full animate-wave"
                  style={{
                    animation: `wave 1s ease-in-out ${i * 0.1}s infinite`
                  }}
                ></div>
              ))}
            </div>
          </div>
        );
      case 'upload':
        return (
          <div className="p-4">
            <div 
              className="border-2 border-dashed border-white/30 rounded-lg p-6 text-center transition-all duration-300 hover:border-white/50"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                onUpload();
              }}
            >
              <Upload className="w-12 h-12 mx-auto mb-4 text-white animate-bounce" />
              <p className="text-white font-medium">Drop files here or click to upload</p>
              <p className="text-white/60 text-sm mt-2">Supports images, documents, and more</p>
            </div>
          </div>
        );
      case 'analyze':
        return (
          <div className="p-4">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <Scan className="w-6 h-6 text-white mr-2" />
                <h3 className="text-white font-semibold">Page Analysis</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Investment focused', confidence: 95 },
                  { label: 'Women empowerment', confidence: 90 },
                  { label: 'Financial planning', confidence: 85 }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className="flex justify-between text-white/80 text-sm mb-1">
                      <span>{item.label}</span>
                      <span>{item.confidence}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-purple-400 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${item.confidence}%`,
                          animation: `slideRight 1.5s ease-out ${i * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Backdrop blur when expanded */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={toggleExpand}
        />
      )}

      {/* Action Bar */}
      <div
        className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-900/90 backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300 z-50 ${
          isExpanded ? 'w-[90%] max-w-2xl' : 'w-auto'
        }`}
      >
        {/* Processing Snapshot */}
        {isProcessing && (
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              <div className="text-white text-sm">Processing {activeAction}...</div>
            </div>
          </div>
        )}

        {/* Main Action Bar Content */}
        <div className="relative">
          {/* Toggle Button */}
          <button
            onClick={toggleExpand}
            className="absolute -right-3 -top-3 bg-purple-700 p-2 rounded-full shadow-lg hover:bg-purple-600 transition-colors duration-200"
          >
            {isExpanded ? (
              <Minimize2 className="w-4 h-4 text-white" />
            ) : (
              <Maximize2 className="w-4 h-4 text-white" />
            )}
          </button>

          {/* Action Items */}
          <div className={`flex items-center ${isExpanded ? 'p-4' : 'p-2'}`}>
            <div className={`flex ${isExpanded ? 'flex-col w-full space-y-2' : 'space-x-2'}`}>
              <ActionButton
                icon={<Search className="w-6 h-6 text-white" />}
                label="Search"
                description="Search through content"
                isActive={activeAction === 'search'}
                onClick={() => handleActionClick('search')}
                animation="hover:scale-105"
                showCaption={isExpanded}
              />
              <ActionButton
                icon={<Mic className="w-6 h-6 text-white" />}
                label="Voice Command"
                description="Use voice to navigate"
                isActive={activeAction === 'voice'}
                onClick={() => handleActionClick('voice')}
                animation="hover:scale-105"
                showCaption={isExpanded}
              />
              <ActionButton
                icon={<Upload className="w-6 h-6 text-white" />}
                label="Upload"
                description="Share files and documents"
                isActive={activeAction === 'upload'}
                onClick={() => handleActionClick('upload')}
                animation="hover:scale-105"
                showCaption={isExpanded}
              />
              <ActionButton
                icon={<Scan className="w-6 h-6 text-white" />}
                label="Analyze"
                description="Analyze page content"
                isActive={activeAction === 'analyze'}
                onClick={() => handleActionClick('analyze')}
                animation="hover:scale-105"
                showCaption={isExpanded}
              />
            </div>
          </div>

          {/* Expanded Content */}
          {isExpanded && activeAction && (
            <div className="border-t border-white/10">
              {renderActionContent()}
            </div>
          )}
        </div>
      </div>
    </>
  );
};