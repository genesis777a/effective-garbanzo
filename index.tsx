import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, List, ExternalLink } from 'lucide-react';

const VideoJournal = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showList, setShowList] = useState(false);
  
  const videos = [
    {
      id: 1,
      title: "Video 1",
      url: "https://www.youtube.com/embed/5rIwYS7lC3k",
      originalUrl: "https://youtu.be/5rIwYS7lC3k?feature=shared"
    },
    {
      id: 2,
      title: "Video 2", 
      url: "https://www.youtube.com/embed/f-i_nJLG2Is",
      originalUrl: "https://youtu.be/f-i_nJLG2Is?feature=shared"
    },
    {
      id: 3,
      title: "Video 3",
      url: "https://www.youtube.com/embed/P2AJ6X9Mr3o",
      originalUrl: "https://www.youtube.com/watch?v=P2AJ6X9Mr3o"
    },
    {
      id: 4,
      title: "Video 4",
      url: "https://www.youtube.com/embed/dE-RxHJHpMY",
      originalUrl: "https://youtu.be/dE-RxHJHpMY?feature=shared"
    },
    {
      id: 5,
      title: "Video 5",
      url: "https://www.youtube.com/embed/6KPbFgPK0Bw",
      originalUrl: "https://youtu.be/6KPbFgPK0Bw?feature=shared"
    }
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const selectVideo = (index) => {
    setCurrentVideo(index);
    setShowList(false);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="border-b-2 border-black p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">VIDEO JOURNAL</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono">
              {String(currentVideo + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}
            </span>
            <button
              onClick={() => setShowList(!showList)}
              className="p-2 border border-black hover:bg-black hover:text-white transition-colors"
              aria-label="Toggle video list"
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-4">
        {/* Video List Overlay */}
        {showList && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center">
            <div className="bg-white border-2 border-black p-6 max-w-md w-full mx-4">
              <h3 className="text-xl font-bold mb-4 border-b border-black pb-2">SELECT VIDEO</h3>
              <div className="space-y-2">
                {videos.map((video, index) => (
                  <button
                    key={video.id}
                    onClick={() => selectVideo(index)}
                    className={`w-full p-3 text-left border border-black hover:bg-black hover:text-white transition-colors ${
                      currentVideo === index ? 'bg-black text-white' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Play size={16} />
                      <span>Video {index + 1}</span>
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowList(false)}
                className="w-full mt-4 p-2 border border-black hover:bg-black hover:text-white transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="space-y-6">
          {/* Current Video Info */}
          <div className="border-2 border-black p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">
                VIDEO {String(currentVideo + 1).padStart(2, '0')}
              </h2>
              <a
                href={videos[currentVideo].originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm border border-black px-3 py-1 hover:bg-black hover:text-white transition-colors"
              >
                <ExternalLink size={14} />
                OPEN ORIGINAL
              </a>
            </div>
            
            {/* Video Player */}
            <div className="aspect-video border border-black">
              <iframe
                src={videos[currentVideo].url}
                title={videos[currentVideo].title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevVideo}
              className="flex items-center gap-2 px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors disabled:opacity-50"
              disabled={currentVideo === 0}
            >
              <ChevronLeft size={20} />
              PREVIOUS
            </button>

            {/* Video Dots */}
            <div className="flex gap-2">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideo(index)}
                  className={`w-3 h-3 border border-black transition-colors ${
                    currentVideo === index ? 'bg-black' : 'bg-white hover:bg-gray-200'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextVideo}
              className="flex items-center gap-2 px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors disabled:opacity-50"
              disabled={currentVideo === videos.length - 1}
            >
              NEXT
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Notes Section */}
          <div className="border-2 border-black p-4">
            <h3 className="text-lg font-bold mb-3 border-b border-black pb-2">NOTES</h3>
            <textarea
              placeholder="Add your notes about this video..."
              className="w-full h-32 p-3 border border-black resize-none focus:outline-none focus:ring-2 focus:ring-black"
              defaultValue=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoJournal;