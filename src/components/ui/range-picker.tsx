import { DatePicker, Space } from "antd";
import { useFormikContext } from "formik";
import { useUIStore } from "../../store/uiStore";

const { RangePicker } = DatePicker;

const DateRangePicker = () => {
  const { setDatesRange, dateRange } = useUIStore();
  const { setFieldValue } = useFormikContext();

  const handleChange = (dates: [Date | null, Date | null]) => {
    setDatesRange(dates);
    setFieldValue("duration", dates);
  };

  return (
    <div>
      <h3>Duration</h3>
      <Space direction="vertical">
        <RangePicker value={dateRange} format="MMMM-YYYY" onChange={handleChange} />
      </Space>
    </div>
  );
};

export default DateRangePicker;
