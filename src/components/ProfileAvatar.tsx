import type { ImgHTMLAttributes } from 'react';

type ProfileAvatarProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;

export default function ProfileAvatar(props: ProfileAvatarProps) {
  return (
    <picture>
      <source srcSet="/profile-avatar.avif" type="image/avif" />
      <source srcSet="/profile-avatar.webp" type="image/webp" />
      <img src="/profile-avatar.webp" width="240" height="240" decoding="async" {...props} />
    </picture>
  );
}
