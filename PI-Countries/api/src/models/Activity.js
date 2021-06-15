const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Activity', {
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },

        difficulty: {
            type: DataTypes.INTEGER,
            valite: {
                max: 5,
                min: 1
            },
            allowNull: true
        },

        duration: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

        season: {
            type: DataTypes.ENUM,
            values: ['summer', 'winter', 'spring', 'autumn'],
            allowNull: true
        }

    });
};
