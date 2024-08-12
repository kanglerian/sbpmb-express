'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Answers', [
      {
        question_id: 1,
        answer: "Hijau Navy",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        question_id: 1,
        answer: "Merah",
        correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        question_id: 1,
        answer: "Biru",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        question_id: 1,
        answer: "Hitam",
        correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Answers', null, {});
  }
};
