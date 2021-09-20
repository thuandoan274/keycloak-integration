import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  user = '';
  token = ''

  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.initializeUserOptions();
  }

  private initializeUserOptions(): void {
    this.user = this.keycloakService.getUsername();
    this.keycloakService.getToken().then(token => this.token = token)
  }

  logout(): void {
    this.keycloakService.logout('http://localhost:4200');
  }

}
