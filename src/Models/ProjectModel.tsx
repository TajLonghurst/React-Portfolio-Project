export type ProjectModel = {
  projectID: number;
  label: string;
  pathID: string;
  images: images[];
};

export type images = {
  id: number;
  img: string;
};
