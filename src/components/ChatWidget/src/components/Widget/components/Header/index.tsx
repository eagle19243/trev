import React from 'react';
import './style.scss';
import Launcher from '../Launcher';

const camera = require('../../../../../assets/camera-shutter.svg') as string;

type Props = {
  title: string;
  subtitle: string;
  toggleChat: () => void;
  showCloseButton: boolean;
  titleAvatar?: string;
  chatId: string;
  openLabel: string;
  closeLabel: string;
  closeImg: string;
  openImg: string;
  showBadge?: boolean;
}

function Header({
  title,
  subtitle,
  toggleChat,
  showCloseButton,
  titleAvatar,
  chatId,
  openLabel,
  closeLabel,
  closeImg,
  openImg,
  showBadge,
}: Props) {
  return (
    <div className="rcw-header">
      <h4 className="rcw-title">
        {title}
        <img src={camera} className="rcw-logo" alt="logo" />
      </h4>
      
      <Launcher
        toggle={toggleChat}
        chatId={chatId}
        openLabel={openLabel}
        closeLabel={closeLabel}
        closeImg={closeImg}
        openImg={openImg}
        showBadge={showBadge}
      />
    </div>
  );
}

export default Header;