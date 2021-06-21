import { dispatch } from 'd3-dispatch';
import { pointer } from 'd3-selection';
import { rebind } from '@d3fc/d3fc-rebind';

export default () => {
    const clickEvent = dispatch('click');

    function mouseclick(event) {
        const point = pointer(event);
        clickEvent.call('click', this, [{ x: point[0], y: point[1] }]);
    }

    const instance = (selection) => {
        selection
            .on('click.pointer', mouseclick);

    };

    rebind(instance, clickEvent, 'on');

    return instance;
};
