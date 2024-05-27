import React, { useState, useRef, useEffect } from 'react';
import useAuth from '../../useAuth';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import { useSidebar } from '../Sidebar/SidebarContext';
import { FaPlay, FaPause } from 'react-icons/fa';
import audio1 from '../../media/audio1.mp3';
import audio2 from '../../media/audio2.mp3';

const Settings = () => {
  useAuth();
  const { isSidebarOpen } = useSidebar();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [playCount, setPlayCount] = useState({ audio1: 0, audio2: 0 });
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      const handleEnded = () => {
        setPlayCount(prevCount => {
          const newCount = { ...prevCount, [currentAudio]: prevCount[currentAudio] + 1 };
          if (newCount[currentAudio] < 2) {
            audioRef.current.play();
          } else {
            setIsPlaying(false);
            setCurrentAudio(null);
            audioRef.current = null;
          }
          return newCount;
        });
      };
      
      audioRef.current.addEventListener('ended', handleEnded);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('ended', handleEnded);
        }
      };
    }
  }, [currentAudio]);

  const handlePlayPause = (audioFile, audioKey) => {
    if (currentAudio !== audioKey) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setCurrentAudio(audioKey);
      setIsPlaying(true);
      setPlayCount(prevCount => ({ ...prevCount, [audioKey]: 0 }));
      audioRef.current = new Audio(audioFile);
      audioRef.current.play();
    } else {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className={`flex ${isSidebarOpen ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <div className="p-4">
          <h3>Settings</h3>
          <div className="mt-4">
            <button
              onClick={() => handlePlayPause(audio1, 'audio1')}
              className="mr-4 p-2 bg-gray-200 rounded"
              disabled={playCount.audio1 >= 2}
            >
              {isPlaying && currentAudio === 'audio1' ? <FaPause /> : <FaPlay />} Audio 1
            </button>
            <button
              onClick={() => handlePlayPause(audio2, 'audio2')}
              className="p-2 bg-gray-200 rounded"
              disabled={playCount.audio2 >= 2}
            >
              {isPlaying && currentAudio === 'audio2' ? <FaPause /> : <FaPlay />} Audio 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
