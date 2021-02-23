import { createElement } from "react"
import { Hero } from "../components/Hero"
import { WhyAttend } from "../components/whyAttend"
import { CallToActionComponent } from "../components/CallToAction"
import { PersonalizedHero } from "../components/PersonalizedHero"
import { RegisterForm } from '../components/RegistrationForm';
import { TalkList } from '../components/TalkList'

export const Components = {
  hero: Hero,
  whyAttend: WhyAttend,
  cta: CallToActionComponent,
  "3zPkEj1KqeSn4QdsdnNKO3": PersonalizedHero,
  registrationForm: RegisterForm,
  talksList: TalkList
}

export const componentMapper = contentfulPage => {
  return contentfulPage.components.map((component, i) => {
    if (component?.sys?.contentType?.sys?.id) {      
      return createElement(
        Components[component.sys.contentType.sys.id] ?? (() => null),
        {
          key: i,
          ...component,
        }
      )
    }
  })
}
