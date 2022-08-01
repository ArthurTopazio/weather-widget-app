import style from './WeatherWidgetHeader.module.scss';

interface WidgetHeader {
  name: any,
  time: any,
  timezone: any,
}

const WeatherWidgetHeader: React.FC<WidgetHeader> = (props: WidgetHeader) => {
  const { name, time, timezone } = props
  return (
    <div className={style.header} >
      {`${name}, ${time}, ${timezone}`}
    </div>
  )
};

export default WeatherWidgetHeader;