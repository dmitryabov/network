export type newPostType = {
  id: number;
  message: string;
  likesCount: number;
};

export type contactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

export type profileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: contactsType;
};

export type photosType = {
  small: string;
  large: string;
};

export type userType = {
  id: number;
  name: string;
  status: string;
  photos: photosType;
};
