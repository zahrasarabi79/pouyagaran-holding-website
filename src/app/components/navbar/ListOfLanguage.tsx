import React from 'react';
import {Divider, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {useParams, usePathname, useRouter} from "next/navigation";


const ListOfLanguage = () => {
    const languages = ["en", "fa", "ar"]
    const language = useParams()
    const router = useRouter()
    const pathName = usePathname()
    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }
    const handleButtonClick = (route: string) => {
        router.push(route)
    };

    return (
        <List sx={{
            display: 'flex',
            flexDirection: 'row',
            color: 'rgb(13,19,33)',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 0
        }}>
            {languages.map((locale, index) => (
                <React.Fragment key={locale}>
                    <ListItem sx={{p: 0}}>
                        <ListItemButton
                            sx={{
                                p: 0,
                                px: '10px',
                                color: locale === language?.locale ? '#255C09' : 'rgba(13, 19, 33, 0.50)',

                                '&:focus': {color: '#255C09'},
                                '&:hover': {bgcolor: 'rgba(0,0,0,0) !important'},
                                '&:active': {bgcolor: 'rgba(0,0,0,0) !important'},
                            }}
                            onClick={() => handleButtonClick(redirectedPathName(locale))}
                        >
                            <ListItemText
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: {xs: 16, sm: 10, md: 16},
                                        fontWeight: locale === language?.locale ? '800' : '400',
                                    },
                                }}
                                primary={locale.toUpperCase()}
                            />
                        </ListItemButton>
                    </ListItem>
                    {index < languages.length - 1 &&
                        <Divider variant="middle" orientation="vertical" flexItem sx={{
                            bgcolor: 'rgba(13, 19, 33, 0.10)',
                            width: '1px',
                            height: '16px'
                        }}/>}
                </React.Fragment>
            ))}
        </List>
    );
};

export default ListOfLanguage;
