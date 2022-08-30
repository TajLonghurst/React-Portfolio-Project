export type ProjectModel = {
  projectID: number;
  label: string;
  pathID: string;
  heroImg: string;
  githuhLink: string;
  liveViewLink: string;
  images: images[];
};

export type images = {
  id: number;
  img: string;
};
