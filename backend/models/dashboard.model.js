import mongoose from 'mongoose';

const dashBoardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  { collection: 'dashboard' }
);

const DashBoard = mongoose.model('DashBoard', dashBoardSchema);
export default DashBoard;
