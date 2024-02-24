const WrappedComponent = (Component, props) => {
    const history = useHistory();
    const location = useLocation();

    return <Component history={history} location={location} {...props} />;
};
