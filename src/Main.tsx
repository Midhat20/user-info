import { Col, GridLayout, useBreakpoints } from "@nye-shared/lib";
import AppRoutes from "./routes/AppRoutes";
import { useStyles } from "./main.styles";
import LeftNavigation from "@components/leftNavigation";
import useNewHeaderAndLeftNav from "@hooks/useNewHeaderAndLeftNav";

// Attaching app info to window object
if (__APP_INFO__ && window) {
  const windowObj = window as any;
  windowObj.apps = [...(windowObj.apps || []), __APP_INFO__];
}

/**
 * Main component
 */
const Main = () => {
  const styles = useStyles();
  const { isMobile } = useBreakpoints();
  const isNewHeaderAndLeftNavRequired = useNewHeaderAndLeftNav();

  if (isNewHeaderAndLeftNavRequired) {
    return (
      <main css={[styles.main, styles.mainWithLeftNav]}>
        <GridLayout container justify="space-between">
          {!isMobile && (
            <Col sm={8} md={3} lg={4}>
              <LeftNavigation />
            </Col>
          )}
          <Col sm={8} md={13} lg={19}>
            <AppRoutes />
          </Col>
        </GridLayout>
      </main>
    );
  }

  return (
    <main css={styles.main}>
      <AppRoutes />
    </main>
  );
};

export default Main;
