import { District__Interface } from '../entities/District';
import {
  School__Interface,
  OwnerShipCount__Interface,
} from '../entities/School';
import Districts from '../data/districts';
export const filterSchoolsTotalByOwnerShip = (
  schoolCounts: School__Interface | undefined
): OwnerShipCount__Interface[] => {
  const filteredTeachers =
    schoolCounts === undefined
      ? []
      : schoolCounts.total_schools?.map((total_school) => ({
          ...total_school,
          ...(schoolCounts.total_school_teachers.length > 0
            ? schoolCounts.total_school_teachers?.find(
                (total_school_teacher) =>
                  total_school.ownership_type ===
                  total_school_teacher.ownership_type
              )
            : { total_teachers: '0' }),
          ...(schoolCounts.total_school_students.length > 0
            ? schoolCounts.total_school_students?.find(
                (total_school_student) =>
                  total_school.ownership_type ===
                  total_school_student.ownership_type
              )
            : { total_students: '0' }),
        }));
  return filteredTeachers;
};

export const findDistrictNameToCode = (
  districtsTotalSchools: District__Interface[] | undefined
) => {
  return districtsTotalSchools === undefined
    ? []
    : Districts.map((district) => ({
        ...district,
        total_schools: districtsTotalSchools.filter(
          (districtTotalSchools) => districtTotalSchools.code === district.code
        )[0].total_schools,
      }));
};
