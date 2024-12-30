import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'druxamb.me',
    href: 'https://druxamb.me',
  },
  {
    social: 'email',
    link: 'druxambsite@gmail.com',
    href: 'mailto:druxambsite@gmail.com',
  },
  {
    social: 'github',
    link: 'druxamb',
    href: 'https://github.com/druxamb',
  },
  {
    social: 'linkedin',
    link: 'druxamb',
    href: 'https://www.linkedin.com/in/druxamb/',
  },
  {
    social: 'twitter',
    link: 'druxamb',
    href: 'https://www.x.com/druxamb',
  },
  {
    social: 'instagram',
    link: 'druxamb',
    href: 'https://www.instagram.com/druxamb',
  },
  {
    social: 'tiktok',
    link: 'druxamb',
    href: 'https://www.tiktok.com/druxamb',
  },
  {
    social: 'telegram',
    link: 'druxamb',
    href: 'https://t.me/druxamb',
  },
  {
    social: 'facebook',
    link: 'druxamb',
    href: 'https://facebook.com/druxamb',
  },
  {
    social: 'warpcast',
    link: 'druxamb',
    href: 'https://warpcast.com/druxamb',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
