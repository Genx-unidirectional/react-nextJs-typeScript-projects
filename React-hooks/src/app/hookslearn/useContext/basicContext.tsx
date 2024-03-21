//What we are creating here is instead prop we are going to make he header size inside the header component but those headers are nested inside the section so we need to pass the props to tell them their level
import Header from "@/app/ui/useContextUi/header";
import Section from "@/app/ui/useContextUi/section";
const BasicContext = () => {
  return (
    <div className="w-[400px] h-[500px]  p-3 bg-white rounded-xl">
      <Section>
        <Header>Level </Header>
        <Header>Level </Header>
        <Section>
          <Header>Level </Header>
          <Header>Level </Header>
          <Section>
            <Header>Level </Header>
            <Header>Level </Header>
            <Section>
              <Header>Level </Header>
              <Header>Level </Header>
              <Section>
                <Header>Level </Header>
                <Header>Level </Header>
              </Section>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
};
export default BasicContext;
