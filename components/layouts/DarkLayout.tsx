const DarkLayout = ({ children }: any) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  );
};

export default DarkLayout;
