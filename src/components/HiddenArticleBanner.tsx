import React from 'react';

interface HiddenArticleBannerProps {
  className?: string;
}

export const HiddenArticleBanner: React.FC<HiddenArticleBannerProps> = ({
  className = ''
}) => {
  return (
    <div className={`hidden-article-banner ${className}`}>
      <div className="banner-content">
        <span className="banner-icon">🚧</span>
        <div className="banner-text">
          <strong>Draft in progress</strong> - you found the source!
          This shows our transparent AI collaboration process.
        </div>
        <a
          href="/hidden-articles"
          className="banner-link"
          title="View all hidden articles"
        >
          See pipeline →
        </a>
      </div>

      <style jsx>{`
        .hidden-article-banner {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          border: 1px solid #f59e0b;
          border-radius: 8px;
          padding: 12px 16px;
          margin: 16px 0;
          font-size: 14px;
          line-height: 1.4;
        }

        .banner-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .banner-icon {
          font-size: 16px;
          flex-shrink: 0;
        }

        .banner-text {
          flex: 1;
          color: #92400e;
        }

        .banner-text strong {
          color: #78350f;
        }

        .banner-link {
          color: #92400e;
          text-decoration: underline;
          font-weight: 500;
          flex-shrink: 0;
          transition: color 0.2s ease;
        }

        .banner-link:hover {
          color: #78350f;
        }

        @media (max-width: 640px) {
          .banner-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .banner-link {
            align-self: flex-end;
          }
        }
      `}</style>
    </div>
  );
};

export default HiddenArticleBanner;
