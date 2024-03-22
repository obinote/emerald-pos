export type TAccount = {
  id?: string;
  fullName?: string;
  displayName?: string;
  phoneNumber?: string;
};

export type TAccountParams = {
  search?: string;
  id?: string;
  per_page?: number;
};

export type TAccountPage = {
  current_page: number;
  last_page: number;
  data: TAccount[];
};
