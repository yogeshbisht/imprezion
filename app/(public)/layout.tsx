const PublicLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full dark:bg-neutral-950">
      {children}
    </div>
   );
}
 
export default PublicLayout;