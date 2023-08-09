import context from '@docusaurus/useDocusaurusContext';


export default function locale(): string {
    const { siteConfig, i18n } = context();
    if (siteConfig.i18n.defaultLocale === i18n.currentLocale) {
        return "";
    } else {
        const locale = "/" + i18n.currentLocale;
        return locale;
    }
}