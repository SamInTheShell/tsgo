import {
    Heart, Brain, Eye, Zap, Dna, Sword, Shield, Feather, Orbit, BatteryFull,
    Castle, Crown, FlaskConical, Key, Lock, User, Users, Terminal, Cpu, Database, Wifi, Satellite, Bug, Ghost, Bot, Star, Moon, Sun, CloudLightning, Cloud, Book, Scroll, Gem, Hammer, Wrench, Axe, Map, Compass, Globe, Radar, Code, Server, Folder, FileText, MessageCircle, Bell, Music, Camera, Watch, Timer, Rocket, Lightbulb, Magnet, CircuitBoard,
    ShieldCheck, ShieldOff, ShieldPlus, ShieldMinus, ShieldAlert, ShieldQuestion, EyeOff, ArrowLeft, LogOut, RefreshCcw,
    MessageSquare, Newspaper, Dumbbell, Gavel, Stethoscope, TreePine, Building2, Landmark, BadgeCheck, HeartPulse, Flame, Beer, GlassWater, Wine, Gamepad2, PenTool, Sparkles, Store, Swords, Mountain,
    LogIn,
    Backpack,
    HardHat,
    KeyRound,
    AtSign,
    UserPlus,
    KeySquare,
    BatteryCharging,
    Trash2,
    Trash,
    Shredder,
    Expand,
    Hand,
    Footprints
} from 'lucide-react';
import {
    DataObject as DataObjectIcon,
    Security as SecurityIcon,
    Storage as StorageIcon,
    AccountTree as AccountTreeIcon,
    BugReport as BugReportIcon,
    Terminal as TerminalIcon,
    Castle as CastleIcon,
    Commit as CommitIcon,
    VpnKey as VpnKeyIcon,
    Lock as LockIcon,
    Map as MapIcon,
    RocketLaunch as RocketLaunchIcon,
    EmojiEvents as EmojiEventsIcon,
    AutoAwesome as AutoAwesomeIcon,
    MenuBook as MenuBookIcon,
    Diamond as DiamondIcon,
    Gesture as GestureIcon,
    Explore as ExploreIcon,
    Public as PublicIcon,
    Notifications as NotificationsIcon,
    PhotoCamera as PhotoCameraIcon,
    MusicNote as MusicNoteIcon,
    Timer as TimerIcon,
    Lightbulb as LightbulbIcon,
    Cloud as CloudIcon,
    WbSunny as WbSunnyIcon,
    NightsStay as NightsStayIcon,
    Star as StarIcon,
    Visibility as VisibilityIcon,
    Build as BuildIcon,
    Handyman as HandymanIcon,
    Folder as FolderIcon,
    InsertDriveFile as InsertDriveFileIcon,
    Message as MessageIcon,
    Memory as MemoryIcon,
    Error as ErrorIcon,
    SportsMma as SportsMmaIcon,
    AutoFixNormal as AutoFixNormalIcon,
    AutoFixHigh as AutoFixHighIcon
} from '@mui/icons-material';
import React from 'react';

export const iconComponents: Record<string, React.ElementType> = {
    Heart,
    Energy: BatteryFull,
    Brain,
    Eye,
    Lightning: Zap,
    Dna,
    Sword,
    Swords,
    Shield,
    Feather,
    Orbit,
    Castle,
    Crown,
    Flask: FlaskConical,
    Key,
    Lock,
    User,
    Users,
    Terminal,
    Cpu,
    Database,
    Wifi,
    Satellite,
    Bug,
    Ghost,
    Bot,
    Star,
    Moon,
    Sun,
    CloudLightning,
    Cloud,
    Book,
    Scroll,
    Gem,
    Hammer,
    Wrench,
    Axe,
    Map,
    Compass,
    Globe,
    Radar,
    Code,
    Server,
    Folder,
    File: FileText,
    Message: MessageCircle,
    Bell,
    Music,
    Camera,
    Watch,
    Timer,
    Rocket,
    Lightbulb,
    Magnet,
    Circuit: CircuitBoard,
    ShieldCheck,
    ShieldOff,
    ShieldPlus,
    ShieldMinus,
    ShieldAlert,
    ShieldQuestion,
    EyeOff,
    BackOut: ArrowLeft,
    Exit: LogOut,
    LogIn,
    Refresh: RefreshCcw,
    Broken: ErrorIcon,
    MessageSquare,
    Newspaper,
    Dumbbell,
    Gavel,
    Stethoscope,
    TreePine,
    Building2,
    Landmark,
    BadgeCheck,
    HeartPulse,
    Flame,
    Beer,
    GlassWater,
    Wine,
    Gamepad2,
    PenTool,
    Sparkles,
    Store,
    Mountain,
    Backpack,
    HardHat,
    KeyRound,
    AtSign,
    UserPlus,
    KeySquare,
    BatteryCharging,
    Trash,
    Trash2,
    Shredder,
    Expand,
    Fist: Hand,
    Footprints,
    RotateCcw: RefreshCcw,
    // MUI icons with prefix
    'MUI/DataObject': DataObjectIcon,
    'MUI/Security': SecurityIcon,
    'MUI/Storage': StorageIcon,
    'MUI/AccountTree': AccountTreeIcon,
    'MUI/BugReport': BugReportIcon,
    'MUI/Terminal': TerminalIcon,
    'MUI/Castle': CastleIcon,
    'MUI/Commit': CommitIcon,
    'MUI/VpnKey': VpnKeyIcon,
    'MUI/Lock': LockIcon,
    'MUI/Map': MapIcon,
    'MUI/Rocket': RocketLaunchIcon,
    'MUI/Crown': EmojiEventsIcon,
    'MUI/Magic': AutoAwesomeIcon,
    'MUI/Book': MenuBookIcon,
    'MUI/Gem': DiamondIcon,
    'MUI/Feather': GestureIcon,
    'MUI/Compass': ExploreIcon,
    'MUI/Globe': PublicIcon,
    'MUI/Bell': NotificationsIcon,
    'MUI/Camera': PhotoCameraIcon,
    'MUI/Music': MusicNoteIcon,
    'MUI/Timer': TimerIcon,
    'MUI/Lightbulb': LightbulbIcon,
    'MUI/Cloud': CloudIcon,
    'MUI/Sun': WbSunnyIcon,
    'MUI/Moon': NightsStayIcon,
    'MUI/Star': StarIcon,
    'MUI/Eye': VisibilityIcon,
    'MUI/Hammer': BuildIcon,
    'MUI/Wrench': HandymanIcon,
    'MUI/Folder': FolderIcon,
    'MUI/File': InsertDriveFileIcon,
    'MUI/Message': MessageIcon,
    'MUI/Circuit': MemoryIcon,
    'MUI/Gloves': SportsMmaIcon,
    'MUI/Wand1': AutoFixNormalIcon,
    'MUI/Wand2': AutoFixHighIcon,
};

function getIconComponent(icon: string) {
    if (!icon) return undefined;
    // Try direct match, then lowercase match
    if (iconComponents[icon]) return iconComponents[icon];
    const lowerKey = Object.keys(iconComponents).find(k => k.toLowerCase() === icon.toLowerCase());
    if (lowerKey) return iconComponents[lowerKey];
    return undefined;
}

function isMuiIconKey(icon: string) {
    return icon.toLowerCase().startsWith('mui/');
}

interface IconographyProps {
    icon: string;
    color?: string;
    size?: number | string;
    gradient?: string;
}

export default function Iconography({ icon, color, size = 24, gradient }: IconographyProps) {
    // Determine if color is a gradient string
    const colorIsGradient = typeof color === 'string' && color.includes(',');
    const effectiveGradient = colorIsGradient ? color : gradient;
    if (icon === 'Credits') {
        // Render credits icon as SVG for uniform sizing
        const gradientId = `icon-gradient-credits-${Math.random().toString(36).substr(2, 9)}`;
        if (effectiveGradient) {
            const [start, end] = effectiveGradient.split(',');
            return (
                <svg width={size} height={size} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <defs>
                        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={start.trim()} />
                            <stop offset="100%" stopColor={end.trim()} />
                        </linearGradient>
                    </defs>
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontWeight="bold"
                        fontSize={typeof size === 'number' ? size * 0.8 : size}
                        fill={`url(#${gradientId})`}
                    >
                        ₡
                    </text>
                </svg>
            );
        }
        return (
            <svg width={size} height={size} style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontWeight="bold"
                    fontSize={typeof size === 'number' ? size * 0.8 : size}
                    fill={color || '#ffe600'}
                >
                    ₡
                </text>
            </svg>
        );
    }
    // Remove special-case for Broken, handle via generic MUI logic
    const IconComponent = getIconComponent(icon);
    if (IconComponent) {
        if (effectiveGradient) {
            const gradientId = `icon-gradient-${icon}-${Math.random().toString(36).substr(2, 9)}`;
            const [start, end] = effectiveGradient.split(',');
            if (isMuiIconKey(icon) || icon === 'Broken') {
                // Render MUI icon (including Broken) with gradient using SVG mask, force fill to #fff
                return (
                    <svg width={size} height={size} style={{ display: 'inline-block' }}>
                        <defs>
                            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={start.trim()} />
                                <stop offset="100%" stopColor={end.trim()} />
                            </linearGradient>
                            <mask id={`${gradientId}-mask`}>
                                <g>
                                    <IconComponent fontSize="inherit" htmlColor="#fff" style={{ width: '100%', height: '100%', fill: '#fff' }} />
                                </g>
                            </mask>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#${gradientId})`} mask={`url(#${gradientId}-mask)`} />
                    </svg>
                );
            }
            // Lucide icons: overlay gradient-masked icon on top of solid color version
            const needsNudge = typeof size === 'number' && size <= 16;
            const nudgeStyle = needsNudge ? { top: -2 } : {};
            return (
                <span style={{ position: 'relative', display: 'inline-block', width: size, height: size, verticalAlign: 'middle' }}>
                    {/* Base icon as SVG for perfect alignment */}
                    <svg width={size} height={size} style={{ position: 'absolute', left: 0, width: size, height: size, ...nudgeStyle }}>
                        <g>
                            <IconComponent color={start.trim()} size={size} style={{ width: '100%', height: '100%' }} />
                        </g>
                    </svg>
                    {/* Gradient-masked icon overlay */}
                    <svg width={size} height={size} style={{ position: 'absolute', left: 0, width: size, height: size, pointerEvents: 'none', ...nudgeStyle }}>
                        <defs>
                            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={start.trim()} />
                                <stop offset="100%" stopColor={end.trim()} />
                            </linearGradient>
                            <mask id={`${gradientId}-mask`}>
                                <g>
                                    <IconComponent color="#fff" size={size} style={{ width: '100%', height: '100%' }} />
                                </g>
                            </mask>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#${gradientId})`} mask={`url(#${gradientId}-mask)`} />
                    </svg>
                </span>
            );
        }
        if (isMuiIconKey(icon) || icon === 'Broken') {
            // Use CSS color inheritance for MUI icons, force fill to currentColor
            // For Broken, default to #ffe600 if no color provided
            const muiColor = icon === 'Broken' ? (color || '#ffe600') : color;
            return (
                <span style={{ color: muiColor, width: size, height: size, display: 'inline-block' }}>
                    <IconComponent fontSize="inherit" htmlColor="inherit" style={{ width: '100%', height: '100%', fill: 'currentColor' }} />
                </span>
            );
        }
        return <IconComponent color={color} size={size} />;
    }
    return <span style={{ color }}>{icon}</span>;
}

