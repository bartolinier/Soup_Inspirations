const size = {
    smallMobile: "300px",
    mobile: "600px",
    tablets: "768px",
    large: "992px",
    xlarge: "1200px",

}

export const device = {
    mobileXXS: `(max-width: ${size.smallMobile})`,
    mobileXS: `(max-width: ${size.mobile})`,
    mobile: `(min-width: ${size.mobile})`,
    tablets: `(min-width: ${size.tablets})`,
    large: `(min-width: ${size.large})`,
    xlarge: `(min-width: ${size.xlarge})`

};