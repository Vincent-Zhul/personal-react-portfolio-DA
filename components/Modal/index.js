import React from 'react';
import { useTheme } from 'next-themes';
import styles from '../../styles/modal.module.css'; // 确保路径正确

const Modal = ({ isOpen, onClose, project }) => {
  const { theme } = useTheme(); // 获取当前主题

  if (!isOpen || !project) return null;

  // 使用主题信息动态更改类名
  const modalBackgroundClass = theme === 'dark' ? styles.modalDark : styles.modalLight;
  const modalContentClass = theme === 'dark' ? styles.contentDark : styles.contentLight;

  return (
    <div className={modalBackgroundClass}>
      <div className={modalContentClass}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img src={project.imageSrc} alt={project.title} className={styles.modalImage} />
        {project.details && project.details.split('-').map((detail, index) => (
          <p key={index} className={styles.detailText}>· {detail}</p>
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
