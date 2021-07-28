module.exports = {
  async up(db) {
    await db.collection('employees').insertMany([
      {
        employee_name: 'Amar Pai Fondekar',
        employee_id: 1,
        joining_date: '2nd July 2021',
        rating: 3,
        designation: 'Full Stack Developer',
        country: 'Paris',
        department: ['Payments', 'Sales', 'IT'],
        review_request: [ 3, 4],
        review_comments: [
          {
            name: 'John hamilton',
            employee_id: 3,
            rating: 4,
            comment: 'Amar is a very good team player, very approachable and provides good solutions',
          },
          {
            name: 'Roger Green',
            employee_id: 4,
            rating: 2,
            comment: 'very approachable and provides good solutions',
          },
        ],
      },
      {
        employee_name: 'Rachel Green',
        employee_id: 2,
        joining_date: '15th Jan 2021',
        rating: 3,
        designation: 'Business Analyst',
        country: 'Japan',
        department: ['Liqudity', 'Innovation', 'IT'],
        review_request: [ 3 ],
        review_comments: [
          {
            name: 'John hamilton',
            employee_id: 3,
            rating: 4,
            comment: 'Rachel is a very good team player, very approachable and provides good solutions',
          }
        ],
      },
    ]);
  },

  async down(db) {
    await db.collection('employees').remove({});
  },
};
