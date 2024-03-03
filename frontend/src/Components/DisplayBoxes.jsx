export default function ContentBox({ classes, children, style }) {
  return <div className={`rounded-xl p-10 color-secondary ${classes}`} style={style}>
    {children}
  </div>
}

export const Container = function ({ classes, children }) {
  return <div className={`flex flex-col md:flex-row ${classes}`}>
    {children}
  </div>
}