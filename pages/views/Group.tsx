import { NextPage, NextPageContext } from 'next';
import { Student } from '../../src/student';

interface GroupProps {
  props: { data?: Student[] | null };
}

const Group: NextPage<GroupProps> = ({ props }) => {
  return (
    <div>
      {props &&
        props.data &&
        props.data?.map((v) => <div key={v.id}>{v.name}</div>)}
    </div>
  );
};

Group.getInitialProps = (ctx: NextPageContext): GroupProps => {
  const data = JSON.parse(JSON.stringify(ctx.query.data));
  console.log(data);
  return { props: { data: data } };
};

export default Group;
