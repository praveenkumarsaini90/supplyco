module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        id: {
            field: 'id',
            autoIncrement: true,
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        first_name: {
            type: Sequelize.STRING(255),
            allowNull: false,
            comment: 'fist name',
        },
        last_name: {
            type: Sequelize.STRING(255),
            allowNull: false,
            comment: 'last name',
        },
        email: {
            type: Sequelize.STRING(255),
            allowNull: true,
            comment: 'Email',
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: true,
            comment: 'password',
        },
        mobile_no: {
            type: Sequelize.STRING(255),
            allowNull: true,
            comment: 'password',
        },
        created_by: {
            type: Sequelize.STRING(100),
            allowNull: true,
            comment: 'created by',
        },
        updated_by: {
            type: Sequelize.STRING(100),
            allowNull: true,
            comment: 'updated by',
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: 1,
            comment: 'status',
        }
    }, {
        tableName: 'user',
        comment: 'user base info',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
    return User;
};