import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

  interface ProfileAvatarProps {
    image_url?: string
  }
  
  export function ProfileAvatar({image_url}: ProfileAvatarProps) {
    return (
      <Avatar>
        <AvatarImage src={image_url} alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  }
  