export type ProjectModel = {
  projectID: number;
  label: string;
  pathID: string;
  heroImg: string;
  images: images[];
};

export type images = {
  id: number;
  img: string;
};
