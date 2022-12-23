import React from 'react';
import { debounce } from 'lodash';

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = React.useState();

    let lastScroll = 0;

    const handleScroll = () => {
        setScrollDirection(window.pageYOffset > lastScroll ? 'down' : 'up');

        lastScroll = window.pageYOffset;
    };

    typeof window !== 'undefined' &&
        window.addEventListener(
            'scroll',
            debounce(handleScroll, 300, {
                leading: true,
                trailing: false
            })
        );
    // window.addEventListener('scroll', handleScroll);

    return scrollDirection;
};

export default useScrollDirection;
