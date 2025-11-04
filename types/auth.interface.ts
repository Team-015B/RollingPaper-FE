export default interface AuthType {
  nickName: string;
  password: string;
}

export default interface ProfileType {
  id?: number;
  imageUrl?: string | null;
  nickName: string;
  role?: "student" | "teacher";
}