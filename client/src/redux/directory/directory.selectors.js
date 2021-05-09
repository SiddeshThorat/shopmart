import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;
//final
export const selectDirectorySections = createSelector(
  [selectDirectory],
  directory => directory.sections
);