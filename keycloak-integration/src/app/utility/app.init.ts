
import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
    return () =>
        keycloak.init({
            config: {
                url: 'http://172.17.3.20/auth',
                realm: 'Immowise',
                clientId: 'angular-immowise-client',
            },
            initOptions: {
                checkLoginIframe: true,
                checkLoginIframeInterval: 25
            },
            loadUserProfileAtStartUp: true
        });
}
