import { DataTypes } from 'sequelize';
import sequelize from '../utils/sequelize';
const email = sequelize.define('email', { email: { type: DataTypes.STRING, allowNull: false }, caption: { type: DataTypes.STRING, allowNull: false } });
export default email;
