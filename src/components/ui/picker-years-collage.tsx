import { DatePicker, Space } from "antd";
import { useFormikContext } from "formik";
import { useUIStore } from "../../store/uiStore";

const { RangePicker } = DatePicker;

const DatePickerYearsCollege = () => {
  const { setCollegeDate, collegeDate } = useUIStore();
  const { setFieldValue } = useFormikContext();

  const handleChange = (dates: [Date | null, Date | null]) => {
    setCollegeDate(dates);
    setFieldValue("duration", dates);
  };

  return (
    <div>
      <h3>Duration</h3>
      <Space direction="vertical">
        <RangePicker
          value={collegeDate}
          format="MMMM-YYYY"
          onChange={handleChange}   
        />
      </Space>
    </div>
  );
};

export default DatePickerYearsCollege;
