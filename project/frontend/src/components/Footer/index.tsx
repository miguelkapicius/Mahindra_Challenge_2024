import { LinkedinLink } from "./LinkedinLink";

export function Footer() {
    return (
        <footer className="bg-muted/30 rounded-t">
            <div className="py-6 space-y-6">
                <div className="flex flex-wrap md:flex-row justify-around items-center gap-6">
                    <LinkedinLink
                        name="Miguel Kapicius"
                        link="https://www.linkedin.com/in/miguelkapicius/"
                        image="https://avatars.githubusercontent.com/u/101507328?v=4"
                        role="Front-end, Database"
                    />
                    <LinkedinLink
                        name="Gabriel Gouvea"
                        link="https://www.linkedin.com/in/gabriel-gouvea-marques-de-oliveira-50b205200/"
                        image="https://media.licdn.com/dms/image/v2/D4D35AQEkeIcvQv_PrQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1718742085122?e=1726776000&v=beta&t=gCELj5sVRrfRRnH7HU7pcn1AmhKc38pKMM4hnT-n7g0"
                        role="Front-end"
                    />
                    <LinkedinLink
                        name="Thiago Ferreira"
                        link="https://www.linkedin.com/in/thiago-ferreira-58537b2aa/"
                        image="https://media.licdn.com/dms/image/v2/D4D03AQGsqdoBgSACEA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705085936560?e=1731542400&v=beta&t=hV6u8FnqAf8WpPr2nbqxd6Wh3y1ZaD9TX6eFEHFvnGU"
                        role="Back-end"
                    />
                    <LinkedinLink
                        name="David Gabriel"
                        link="https://www.linkedin.com/in/david-g-4a856418b/"
                        image="https://media.licdn.com/dms/image/v2/D4D03AQHbiLLZrQt9aw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724717291268?e=1731542400&v=beta&t=56xhnypnLObYVd1ev0U5eyKkykRsHyb6zxFlj1Qm5LM"
                        role="Back-end"
                    />
                    <LinkedinLink
                        name="Denise Senise"
                        link="https://www.linkedin.com/in/denise-senise-5330b8104/"
                        image="https://media.licdn.com/dms/image/v2/D4D03AQHLsGNGt79uqg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690945803517?e=1731542400&v=beta&t=aw0Z7akf-dEWGvZYdt8_PwJiMllIOe6lvc_mRHCIX_w"
                        role="Back-end"
                    />
                </div>
                <p className="text-center text-muted-foreground">
                    &copy; {new Date().getFullYear()} E-Pit. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}
