export class Db {
  private stuInfo = [
    { _id: '1', name: 'Assad Ssad', stuId: '12345', email: 'assad@mum.edu' },
    { _id: '2', name: 'Geeta Puta', stuId: '12346', email: 'geeta@mum.edu' },
    { _id: '1', name: 'Teddy Assef', stuId: '12347', email: 'teddy@mum.edu' }
  ];

  getStudents() {
    return this.stuInfo;
  }

  getStudent(id) {
    return this.stuInfo.find(stu => stu.stuId === id);
  }
}
