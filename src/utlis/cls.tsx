export default function(className: string) {
    const classname = className;
    return (element?: string, attrs?: {[key: string]: any}) => {
        const classnames = [];
        if (element) {
            classnames.push(`${classname}__${element}`);
            Object.keys(attrs).forEach((key) =>  {
                if (Boolean(attrs[key]) === true) {
                    classnames.push(`${classname}__${element}_${key}`);
                } else {
                    classnames.push(`${classname}__${element}_${key}_${attrs[key]}`);
                }
            });
            return classnames.join('');
        }
        return classname;
    };
}
