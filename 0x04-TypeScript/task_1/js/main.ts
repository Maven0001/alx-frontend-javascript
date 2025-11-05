interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  // contract: boolean;
  [propName: string]: any;
}

const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  yearsOfExperience: 3,
  location: "London",
  contract: false,
};

/////////////////////TASK 02//////////////
interface Directors {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  numberOfReports: number;
}
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

/////////////////////TASK 03//////////////

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return "${firstName} . ${lastName}";
}

/////////////////////TASK 04//////////////

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the interface
class StudentClass {
  private firstName: string;
  private lastName: string;

  // Constructor matches StudentConstructor interface
  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Returns "Currently working"
  workOnHomework(): string {
    return "Currently working";
  }

  // Returns the student's first name
  displayName(): string {
    return this.firstName;
  }
}
